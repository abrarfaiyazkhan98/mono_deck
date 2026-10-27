import test from 'node:test';import assert from 'node:assert/strict';import {safeBundleId,validToken,respond} from './server.mjs';
test('bundle validation',()=>{assert.equal(safeBundleId('com.apple.Safari'),true);for(const id of ['','../../a','com.app;echo','-a'])assert.equal(safeBundleId(id),false)});
test('token comparison',()=>{assert.equal(validToken('a','a'),true);assert.equal(validToken('a','b'),false);assert.equal(validToken('a','ab'),false)});
test('unauthenticated API denied',async()=>{let status;await respond({url:'/api/apps',method:'GET',headers:{}},{writeHead(s){status=s},end(){}});assert.equal(status,401)});
