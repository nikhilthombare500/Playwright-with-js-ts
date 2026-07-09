import fs from 'fs-extra';

try {
  fs.ensureDirSync('test-result');
} catch (error) {
  console.error('Error occurred while creating reports directory:' + error);
}