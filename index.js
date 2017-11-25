const request = require('request');

const trackingID = 'UA-34396002-3';

exports.ghinbox = (req, res) => {
    const { commits, repository, sender } = req.body;

    request.post('http://www.google-analytics.com/collect', {
        form: {
            'v': '1',
            'tid': trackingID,
            'cid': sender.login,
            't': 'event',
            'ec': 'repo',
            'ea': 'push',
            'el': repository.full_name,
            'cm1': 1,
        }
    }, (err, httpRes, body) => {
        if (err) {
            return res.status(500).send(err);
        }

        res.status(200).send();
    });
};