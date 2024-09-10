export const Utils = {
  normalizePathSlashes(path: string): string {
    let normalizedPath = path;
    if (path && path.charAt(path.length - 1) !== '/') {
      normalizedPath = `${path}/`;
    }
    normalizedPath = normalizedPath.replace(/\/\//g, '/');

    return normalizedPath;
  },
  clearNullValuesInObject(obj: Record<string, any>): void {
    Object.keys(obj).forEach(
      (key) => (obj[key] === undefined || obj[key] === null) && delete obj[key]
    );
  }
};
