module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(512),
      allowNull: false
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
    tableName: 'user',
    underscored: true
  });

  // Associations
  User.associate = (models) => {
    // Define your associations here
    // Example: User.belongsTo(models.OtherModel);
  };

  return User;
};