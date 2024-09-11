const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error('Usage: node create-model.js <model-name> [--assoc]');
  process.exit(1);
}

const modelName = args[0];
const tableName = modelName.toLowerCase();
const hasAssociations = args.includes('--assoc');

// Create model file
const modelTemplate = `module.exports = (sequelize, DataTypes) => {
  const ${modelName} = sequelize.define('${modelName}', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW
    }
  }, {
    timestamps: true,
    tableName: '${tableName}',
    underscored: true
  });

  // Associations
  ${modelName}.associate = (models) => {
    // Define your associations here
    // Example: ${modelName}.belongsTo(models.OtherModel);
  };

  return ${modelName};
};`;

const modelPath = path.join(__dirname, 'models', `${tableName}.js`);
fs.writeFileSync(modelPath, modelTemplate);
console.log(`Model file created at ${modelPath}`);

// Create migration file
const migrationName = `create_${tableName}`;
const migrationCommand = `npx sequelize-cli migration:generate --name ${migrationName}`;

try {
  execSync(migrationCommand, { stdio: 'inherit' });
  console.log('Migration file created.');
  
  // Find the generated migration file and modify it with custom SQL for PostgreSQL
  const migrationDir = path.join(__dirname, 'migrations');
  const files = fs.readdirSync(migrationDir);
  const migrationFile = files.find(file => file.includes(migrationName));

  if (!migrationFile) {
    throw new Error('Migration file not found!');
  }

  const migrationPath = path.join(migrationDir, migrationFile);
  const migrationTemplate = `
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(\`
      CREATE TABLE "${tableName}" (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
      );
    \`);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(\`
      DROP TABLE IF EXISTS "${tableName}";
    \`);
  }
};
`;

  fs.writeFileSync(migrationPath, migrationTemplate);
  console.log(`Migration file updated with PostgreSQL SQL at ${migrationPath}`);
} catch (error) {
  console.error('Failed to create or modify migration file:', error.message);
}
