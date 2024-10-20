/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        "source": "/search",
        "has": [
          {
            "type": "query",
            "key": "pref",
            "value": "23"
          }
        ],
        "destination": "/search?prefectures=23&limit=10&page=1",
        "permanent": true
      },
    ]
  },
};

export default nextConfig;
