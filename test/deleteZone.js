// ----------------------------------------------------------------------------

// npm
var test = require('tape');
var nock = require('nock');

// local
var Route53 = require('../nice-route53.js');

// ----------------------------------------------------------------------------

// create the mock server and client for Route53
var route53 = nock('https://route53.amazonaws.com');
var r53 = new Route53({
    accessKeyId     : 'xxx',
    secretAccessKey : 'xxx',
});

test('deleteZone.js: deleteZone()', function(t) {
    // mock the response
    route53
        .delete('/2013-04-01/hostedzone/Z1PA6795UKMFR9')
        .replyWithFile(500, __dirname + '/DeleteHostedZoneErrorResponse.xml')
    ;

    // get the zones
    var args = {
        zoneId      : 'Z1PA6795UKMFR9'
    };
    r53.deleteZone(args, function(err, result) {
        console.log(err, result);
        // t.equal(err, null, 'There is no error');
        //
        // t.equal(result.zoneId, 'Z1PA6795UKMFR9', 'zoneId is correct');
        // t.equal(result.name, 'example.com', 'name is correct');
        // t.equal(result.reference, 'myUniqueIdentifier', 'reference is correct');
        // t.equal(result.comment, 'This is my first hosted zone.', 'comment is correct');
        //
        // t.equal(result.changeId, 'C1PA6795UKMFR9', 'changeId is correct');
        // t.equal(result.status, 'PENDING', 'status is correct');
        // t.equal(result.submittedAt.toISOString(), '2012-03-15T01:36:41.958Z', 'SubmittedAt date is the same');
        //
        // t.equal(result.nameServers.length, 4, 'four nameservers');
        //
        // t.end();
    });

});

// ----------------------------------------------------------------------------
