export const User = {
    extends: 'input',
    oninit() { if (!this.name) this.name = 'user'; }
  };
export const Pass = {
    extends: 'input',
    oninit() { this.type = 'password'; }
};