function snakeToCamel(string: string): string {
    return string.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  )
}

function camelToSnake(string: string): string {
    return string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

function capitalizeFirstLetter(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowercaseFirstLetter(string: string): string {
    return string.charAt(0).toLocaleLowerCase() + string.slice(1);
}

export {
    snakeToCamel,
    camelToSnake,
    capitalizeFirstLetter,
    lowercaseFirstLetter,
}
