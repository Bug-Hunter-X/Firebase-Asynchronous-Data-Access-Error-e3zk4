The bug is fixed by correctly handling the asynchronous nature of Firebase operations using promises. The code waits for the promise to resolve before attempting to access the data. Here's an example using promises:

```javascript
db.collection('myCollection').doc('myDoc').get()
.then(doc => {
  if (doc.exists) {
    const data = doc.data();
    console.log('Data:', data.propertyName); // Access the property after ensuring it exists
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```
Alternatively, async/await can improve code readability:

```javascript
async function getData() {
  try {
    const doc = await db.collection('myCollection').doc('myDoc').get();
    if (doc.exists) {
      const data = doc.data();
      console.log('Data:', data.propertyName);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}
```