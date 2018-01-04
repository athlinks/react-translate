const pluralTypes = {
  chinese(n) {
    return 0
  },
  german(n) {
    return n !== 1 ? 1 : 0
  },
  french(n) {
    return n > 1 ? 1 : 0
  },
  russian(n) {
    return n % 10 === 1 && n % 100 !== 11 ?
      0 :
        n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ?
          1 :
            2
  },
  czech(n) {
    return (n === 1) ? 0 : (n >= 2 && n <= 4) ? 1 : 2
  },
  polish(n) {
    return (n === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 &&
      (n % 100 < 10 || n % 100 >= 20) ? 1 : 2)
  },
  icelandic(n) {
    return (n % 10 !== 1 || n % 100 === 11) ? 1 : 0
  },
  arabic(n) {
    return (n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 ? 4 : 5)
  }
}

export default pluralTypes
