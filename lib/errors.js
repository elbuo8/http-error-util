'use strict';

var reverseTable = {};

// Heavily influenced by Golang's net/http/status.go
function HTTPError(code, msg) {
  if (!reverseTable[code]) throw new Error('Invalid HTTP Status Code');
  var err = new Error(msg);
  err.status = code;
  err.name = reverseTable[code].replace(/([A-Z])/g, ' $1').trim();
  return err;
}

module.exports = HTTPError;

module.exports.Continue = 100;
module.exports.SwitchingProtocols = 101;
module.exports.OK = 200;
module.exports.Created = 201;
module.exports.Accepted = 202;
module.exports.NonAuthoritativeInfo = 203;
module.exports.NoContent = 204;
module.exports.ResetContent = 205;
module.exports.PartialContent = 206;
module.exports.MultipleChoices = 300;
module.exports.MovedPermanently = 301;
module.exports.Found = 302;
module.exports.SeeOther = 303;
module.exports.NotModified = 304;
module.exports.UseProxy = 305;
module.exports.TemporaryRedirect = 307;
module.exports.BadRequest = 400;
module.exports.Unauthorized = 401;
module.exports.PaymentRequired = 402;
module.exports.Forbidden = 403;
module.exports.NotFound = 404;
module.exports.MethodNotAllowed = 405;
module.exports.NotAcceptable = 406;
module.exports.ProxyAuthRequired = 407;
module.exports.RequestTimeout = 408;
module.exports.Conflict = 409;
module.exports.Gone = 410;
module.exports.LengthRequired = 411;
module.exports.PreconditionFailed = 412;
module.exports.RequestEntityTooLarge = 413;
module.exports.RequestURITooLong = 414;
module.exports.UnsupportedMediaType = 415;
module.exports.RequestedRangeNotSatisfiable = 416;
module.exports.ExpectationFailed = 417;
module.exports.Teapot = 418;
module.exports.InternalServerError = 500;
module.exports.NotImplemented = 501;
module.exports.BadGateway = 502;
module.exports.ServiceUnavailable = 503;
module.exports.GatewayTimeout = 504;
module.exports.HTTPVersionNotSupported = 505;

for (var key in module.exports) {
  reverseTable[module.exports[key]] = key;
}
