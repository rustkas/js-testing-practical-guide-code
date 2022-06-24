import { expect, it } from 'vitest';

import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
	console.log(`token = ${token}`);  
    expect(token).toBeDefined();

    
  });
  
  generateToken(testUserEmail, (err, token) => {
	console.log(`token = ${token}`);  
    expect(token).toBe(2);

    
  });
  
});

// Test functions with callbacks
// 'done' is executed when the test is done
// 'vitest' just wait until 'done' was called
it("should generate a token value with 'done'", (done) => {
  const testUserEmail = 'test@test.com';

  
  generateToken(testUserEmail, (err, token) => {
    // useless Assert
	//expect(token).toBe(2);
	
	// usefull Assert
	try{
		//expect(token).toBe(2);
		expect(token).toBeDefined();
		done();
	} catch (err) {
		done(err);
	}
	
	expect(token).toBeDefined();
	
	done();
    
  });
  
});


// Testing Asychronous Code with Promises
//one way
it('should generate a token value', () => {
	const testUserEmail = 'test@test.com';
	
	//one way
	return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
	//expect(generateTokenPromise(testUserEmail)).resolves.toBe(2);
});

// Testing Asychronous Code with Promises
//second way
it('should generate a token value', async () => {
	const testUserEmail = 'test@test.com';
	
	const token = await generateTokenPromise(testUserEmail);
	//return expect(token).toBe(2);
	return expect(token).toBeDefined();
	
});