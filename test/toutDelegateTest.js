/**
 * Created by aquaboy on 10/22/16.
 */

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var mockery = require('mockery');
var sinon = require('sinon');
var spy = sinon.spy();
var toutDelegate;

var toutMocks =
{
    toutMock :
    {
        findOne : function (args, callback)
        {
            return callback(null,
                {
                    pin:'1234',
                    maxRedemptions:20,
                    save: function(){},
                    redemptions:
                    {
                        findOne: function (args, callback)
                        {
                            return callback(null, null);
                        },
                        count: function(callback)
                        {
                            return callback(null,0);
                        },
                        create: function(args, callback)
                        {
                            return callback(null,
                                {
                                    'date': '',
                                    'approved': true,
                                    'id': 'objectid',
                                    'toutUserId': 'objectid',
                                    'toutId': '1234567890'
                                });
                        }
                    }
                });
        }
    },

    toutNotFoundMock :
    {
        findOne : function (args, callback)
        {
            return callback({id:'0'},
                null);
        }
    },
    toutWithRedemptionMock :
    {
        findOne : function (args, callback)
        {
            return callback(null,
                {
                    pin:'1234',
                    maxRedemptions:20,
                    save: function(){},
                    redemptions:
                    {
                        findOne: function (args, callback)
                        {
                            return callback(null, {
                                'date': '',
                                'approved': true,
                                'id': 'objectid',
                                'toutUserId': 'objectid',
                                'toutId': '1234567890'
                            });
                        },
                        count: function(callback)
                        {
                            return callback(null,0);
                        },
                        create: function(args, callback)
                        {
                            return callback(null,
                                {
                                    'date': '',
                                    'approved': true,
                                    'id': 'objectid',
                                    'toutUserId': 'objectid',
                                    'toutId': '1234567890'
                                });
                        }
                    }
                });
        }
    },
    toutWithRedemptionCountErrorMock :
    {
        findOne : function (args, callback)
        {
            return callback(null,
                {
                    pin:'1234',
                    maxRedemptions:20,
                    save: function(){},
                    redemptions:
                    {
                        findOne: function (args, callback)
                        {
                            return callback({id:'0'}, null);
                        },
                        count: function(callback)
                        {
                            return callback(null,0);
                        },
                        create: function(args, callback)
                        {
                            return callback(null,
                                {
                                    'date': '',
                                    'approved': true,
                                    'id': 'objectid',
                                    'toutUserId': 'objectid',
                                    'toutId': '1234567890'
                                });
                        }
                    }
                });
        }
    }
};

describe('toutDelegate', function()
{
    before(function()
    {
        mockery.enable();
        mockery.registerAllowable('../common/delegate/toutDelegate');
        var loopbackMock = {
            getCurrentContext : function()
            {
                var context = {
                    get : function(arg)
                    {
                        var user = {
                            id: '1234567890'
                        };
                        if(arg === 'currentUser')
                            return user;
                        else
                            return null;
                    }
                };
                return context;
            }
        };
        var ionicPushClientMock = {};
        mockery.registerMock('loopback',loopbackMock);
        mockery.registerMock('../proxy/ionicPushClient',ionicPushClientMock);
    });
    beforeEach(function ()
    {
        toutDelegate = require('../common/delegate/toutDelegate');
    });

    it('redeems touts normally', function()
    {
        var toutDelegateImpl = toutDelegate(toutMocks.toutMock);
        toutDelegateImpl.redeem('id','1235',spy);
        sinon.assert.calledWith(spy, null, sinon.match.has('pin', '1234'));
    });

    it('redeem fails on incorrect PIN', function()
    {
        var toutDelegateImpl = toutDelegate(toutMocks.toutMock);
        const pinErr = new Error('Pin did not match');
        pinErr.name = 'PIN';
        pinErr.status = 403;
        toutDelegateImpl.redeem('id','0000',spy);
        sinon.assert.calledWith(spy, sinon.match(pinErr));
    });

    it('redeem fails on existing redemption',function()
    {
        var toutDelegateImpl = toutDelegate(toutMocks.toutWithRedemptionMock);
        var usedErr =
            new Error('User has redeemed this Tout already');
        usedErr.name = 'USED';
        usedErr.status = 403;
        toutDelegateImpl.redeem('id','1234',spy);
        sinon.assert.calledWith(spy, sinon.match(usedErr));
    });

    it('redeem fails on redemption count error',function()
    {
        var toutDelegateImpl = toutDelegate(toutMocks.toutWithRedemptionCountErrorMock);
        toutDelegateImpl.redeem('id','1234',spy);
        sinon.assert.calledWith(spy, sinon.match({id:'0'}));
    });
    
    it('redeem fails on tout not found', function()
    {
        var toutDelegateImpl = toutDelegate(toutMocks.toutNotFoundMock);
        toutDelegateImpl.redeem('id','1234',spy);
        sinon.assert.calledWith(spy, sinon.match({id:'0'}));
    });

    after(function ()
    {
        mockery.disable();
    });

});

