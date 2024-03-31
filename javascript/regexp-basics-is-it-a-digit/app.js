String.prototype.digit = function () {
    const isDigit = this.match(/^[0-9]$/);
    if (isDigit) {
        return true;
    }
    return false;
};
