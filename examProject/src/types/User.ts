export class User {
    email: string = '';
	password: string = '';

	constructor(values: Object = {}) {
      Object.assign(this, values);
  }

}