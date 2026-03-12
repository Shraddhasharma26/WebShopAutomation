module.exports = {
  default: {
    require: ['tests/hooks/**/*.js', 'tests/step_defination/**/*.js'],
    format: ['progress-bar', 'html:playwright-report/cucumber-report.html'],
    paths: ['tests/features/**/*.feature']
  }
};
