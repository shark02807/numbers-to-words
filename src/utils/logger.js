import chalk from 'chalk';

export const messageTypes = {
  error: 'error',
  warning: 'warning',
  success: 'success'
};

export const logMessage = ({ type, message }) => {
  switch (type) {
    case messageTypes.error:
      console.error(chalk.red.bold(message));
      break;
    case messageTypes.warning:
      console.error(chalk.yellow.bold(message));
      break;
    case messageTypes.success:
      console.log(chalk.green.bold(message));
      break;
  }
};
