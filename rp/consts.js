const prefix = 'const:';

export default function consts(consts) {
  return {
    name: 'consts',
    resolveId(id) {
      if (!id.startsWith(prefix)) {
        return null;
      }
      return id;
    },
    load(id) {
      if (!id.startsWith(prefix)) {
        return null;
      }
      const key = id.slice(prefix.length);

      if (!consts.has(key)) {
        this.error(`invalid cosnt key: ${key}`);
        return;
      }

      return `export default ${JSON.stringify(consts.get(key))}`;
    },
  };
}
