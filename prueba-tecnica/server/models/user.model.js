const {Schema,model} = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique:true
        },
    password: {
        type: String,
        required: [true, "Password is required"],
    }
},{timestamps:true});


UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Las contraseñas deben coincidir');
    }
    next();
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
        this.password = hash;
        next();
        });
});
UserSchema.plugin(uniqueValidator);

const User = model('User',UserSchema);

module.exports = User;