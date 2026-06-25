// cypress/support/formatDates.js

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return `${day}/${month}/${year}`;
};

export const getDateWithOffset = (days) => {
  const date = new Date();
  date.setDate(date.getDate() + days);

  return formatDate(date);
};

export const formatURLDate = (textDate) => {
  const year = textDate.split('/')[2];
  const month = textDate.split('/')[1];
  const day = textDate.split('/')[0];
  
  return `${year}-${month}-${day}`;
};