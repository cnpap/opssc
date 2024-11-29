export function sprintf(format: string, ...args: any[]): string {
  let argIndex = 0;

  return format.replace(/%(\d*\.\d+|\d+)?([dfs])/g, (_, specifier, type) => {
    if (argIndex >= args.length) {
      throw new Error('Insufficient arguments for format string');
    }

    const value = args[argIndex++];
    switch (type) {
      case 'd': // 整数
        return parseInt(value, 10).toString();
      case 'f': // 浮点数
        if (specifier) {
          const precision = parseFloat(specifier).toFixed(0);
          return parseFloat(value).toFixed(parseInt(precision, 10));
        }
        return parseFloat(value).toString();
      case 's': // 字符串
        return value.toString();
      default:
        throw new Error(`Unsupported format type: ${type}`);
    }
  });
}
