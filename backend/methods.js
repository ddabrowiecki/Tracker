app.all('/', (req, res) => {
	if (req.method === 'GET') {
        console.log('get successful')
	} else if (req.method === 'POST') {
        console.log('placeholder')
	}
});