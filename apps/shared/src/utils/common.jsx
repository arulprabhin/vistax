import moment from 'moment';

export const buildMoment = (momentConfig, returnEpoch = false) => {
  let momentBuilder = moment();
  momentConfig.forEach((m) => {
    if (m.action === 'now') {
      // do nothing
    } else if (m.action === 'start' || m.action === 'startOf') {
      momentBuilder.startOf(m.on || m.value);
    } else if (m.action === 'end' || m.action === 'endOf') {
      momentBuilder.endOf(m.on || m.value);
    } else if (m.action === 'add') {
      momentBuilder.add(m.value, m.on);
    } else if (m.action === 'subtract') {
      momentBuilder.subtract(m.value, m.on);
    }
  });
  return returnEpoch ? momentBuilder.toDate().getTime() : momentBuilder.toDate();
};
export const replaceJsonParams = (text, paramJson) => {
  if (!text || !paramJson) {
    return text;
  } else {
    return text
      .replaceAll('{}', '')
      .replace(/{([^;]+)}/, (braces) => braces.substring(1, braces.length - 1))
      .replace(/\%\w+/g, (args) => paramJson[args.substring(1)] || '');
  }
};

export const camelCaseToSentence = (camelStr, capitalizeAllWords) => {
  if (!camelStr) return camelStr;
  return camelStr.replace(/^[a-z]|[A-Z]/g, function (v, i) {
    return i === 0 ? v.toUpperCase() : ' ' + (capitalizeAllWords ? v.toUpperCase() : v.toLowerCase());
  });
};
