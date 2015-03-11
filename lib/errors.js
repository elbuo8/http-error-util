'use strict';

// Heavily influenced by Golang's net/http/status.go

exports.Continue = 100;
exports.SwitchingProtocols = 101;
exports.OK = 200;
exports.Created = 201;
exports.Accepted = 202;
exports.NonAuthoritativeInfo = 203;
exports.NoContent = 204;
exports.ResetContent = 205;
exports.PartialContent = 206;
exports.MultipleChoices = 300;
exports.MovedPermanently = 301;
exports.Found = 302;
exports.SeeOther = 303;
exports.NotModified = 304;
exports.UseProxy = 305;
exports.TemporaryRedirect = 307;
exports.BadRequest = 400;
exports.Unauthorized = 401;
exports.PaymentRequired = 402;
exports.Forbidden = 403;
exports.NotFound = 404;
exports.MethodNotAllowed = 405;
exports.NotAcceptable = 406;
exports.ProxyAuthRequired = 407;
exports.RequestTimeout = 408;
exports.Conflict = 409;
exports.Gone = 410;
exports.LengthRequired = 411;
exports.PreconditionFailed = 412;
exports.RequestEntityTooLarge = 413;
exports.RequestURITooLong = 414;
exports.UnsupportedMediaType = 415;
exports.RequestedRangeNotSatisfiable = 416;
exports.ExpectationFailed = 417;
exports.Teapot = 418;
exports.InternalServerError = 500;
exports.NotImplemented = 501;
exports.BadGateway = 502;
exports.ServiceUnavailable = 503;
exports.GatewayTimeout = 504;
exports.HTTPVersionNotSupported = 505;

var reverseTable = {};

for (var key in exports) {
  reverseTable[exports[key]] = key;
}

exports.getError = function(code, msg) {
  if (!reverseTable[code]) throw new Error('Invalid HTTP Status Code');
  var error = new Error(msg);
  error.status = code;
  error.name = reverseTable[code];
  return error;
};

module.exports = exports;
