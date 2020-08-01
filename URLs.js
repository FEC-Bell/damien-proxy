const URLs = [
  {
    match: '/api/gamereviews/',
    server: 'ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3000',
  },
  {
    match: '/api/reviewcount/',
    server: 'localhost:3002',
  },
  {
    match: '/api/dlc/',
    server: 'ec2-13-56-224-137.us-west-1.compute.amazonaws.com:3003',
  },
  {
    match: '/api/media/',
    server: 'ec2-18-188-192-44.us-east-2.compute.amazonaws.com:3004',
  },
  {
    match: '/api/description/',
    server: 'ec2-13-59-202-34.us-east-2.compute.amazonaws.com:3005',
  },
  {
    match: '/api/tags/',
    server: 'localhost:3006',
  },
];

module.exports = URLs;