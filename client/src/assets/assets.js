import logo from './blogger.svg';
import arrow from './arrow.svg';
import gb from './gradientBackground.jpg'
import blog_pic_1 from './blog_pic_1.avif'
import blog_pic_2 from './blog_pic_2.avif'
import blog_pic_3 from './blog_pic_3.avif'
import blog_pic_4 from './blog_pic_4.avif'
import blog_pic_5 from './blog_pic_5.avif'
import blog_pic_6 from './blog_pic_6.avif'
import blog_pic_7 from './blog_pic_7.avif'
import blog_pic_8 from './blog_pic_8.avif'
import blog_pic_9 from './blog_pic_9.avif'
import blog_pic_10 from './blog_pic_10.avif'
export const assets ={
    logo,
    arrow,
    gb,
    blog_pic_1,
    blog_pic_2,
    blog_pic_3,
    blog_pic_4,
    blog_pic_5,
    blog_pic_6,
    blog_pic_7,
    blog_pic_8,
    blog_pic_9,
    blog_pic_10,

}
export const blogCategories =[
    'All','Technology','Startup','Lifestyle','Finance'
];

export const blog_data = [

{
  "_id": "6805ee7dd8f584af5da78d38",
  "title": "Learning new technology to boost your software career",
  "subTitle": "Upgrade your skills to stay ahead in tech",
  "description": "<h1>Grow with Technology.</h1><p>The software industry changes rapidly. To stay relevant, you must continuously learn new tools, frameworks, and programming languages.</p><h2>1. Follow Trends</h2><p>Stay updated with AI, Cloud, Web3, and DevOps.</p><h2>2. Practice Daily</h2><p>Build small projects and explore GitHub.</p><h2>3. Join Communities</h2><p>Being part of developer communities helps you grow faster.</p><p><strong>Final Tip:</strong> Consistent learning leads to career success.</p>",
  "category": "Technology",
  "image": blog_pic_1,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d39",
  "title": "Tips for getting the most out of apps and software",
  "subTitle": "Use technology more efficiently",
  "description": "<h1>Smart Software Usage</h1><p>Apps are designed to simplify life. Learn how to use them properly to save time.</p><h2>1. Learn Shortcuts</h2><p> Keyboard shortcuts boost productivity.</p><h2>2. Customize Settings </h2><p>Configure apps according to your needs.</p><p><strong>Final Tip:</strong> Let technology work for you.</p>",
  "category": "Technology",
  "image": blog_pic_2,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d40",
  "title": "How to create an effective startup roadmap",
  "subTitle": "Turn ideas into execution",
  "description": "<h1>Startup Planning </h1><p>A roadmap helps startups move in the right direction. </p><h2>1. Define Vision</h2><p>Know what problem you are solving. </p><h2>2. Set Milestones</h2><p>Track progress regularly. </p><p><strong>Final Tip:</strong> Clear goals drive startup success.</p>",
  "category": "Startup",
  "image": blog_pic_3,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d41",
  "title": "Maximizing returns in your startup",
  "subTitle": "Smart business decisions matter",
  "description": "<h1>Startup Growth </h1><p>Use resources wisely to grow profit. </p><h2>1. Reduce Cost</h2><p>Avoid unnecessary expenses.</p><h2>2. Invest in Marketing</h2><p>Reach the right audience.</p>",
  "category": "Startup",
  "image": blog_pic_4,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d42",
  "title": "The new way of study for students",
  "subTitle": "Modern education methods",
  "description": "<h1>Digital Learning</h1><p>Online learning platforms have changed education.</p><h2>1. Learn Anytime</h2><p>Flexible schedules improve focus.</p>",
  "category": "Startup",
  "image": blog_pic_5,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d43",
  "title": "Enhancing your skills and capturing moments",
  "subTitle": "Improve personal growth",
  "description": "<h1>Personal Growth</h1><p>Learning new skills improves confidence.</p><h2>1.Try New Things</h2><p>Explore photography, writing, or art.</p>",
  "category": "Lifestyle",
  "image": blog_pic_6,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d44",
  "title": "Work life balance for a healthy mind",
  "subTitle": "Balance is everything",
  "description": "<h1>Healthy Life</h1><p>Managing time between work and rest is important.</p><h2>1. Take Breaks</h2><p>Rest improves focus.</p>",
  "category": "Lifestyle",
  "image": blog_pic_7,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d45",
  "title": "How to save money effectively",
  "subTitle": "Simple finance tips",
  "description": "<h1>Smart Saving</h1><p>Saving money builds financial security.</p><h2>1. Track Expenses</h2><p>Know where your money goes.</p>",
  "category": "Finance",
  "image": blog_pic_8,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d46",
  "title": "Understanding luxury home taxes",
  "subTitle": "Know how property tax works",
  "description": "<h1>Luxury Home Tax</h1><p>High-value properties have higher tax.</p><h2>1. Government Rules</h2><p>Taxes depend on location.</p>",
  "category": "Finance",
  "image": blog_pic_9,
  "isPublished": true
},

{
  "_id": "6805ee7dd8f584af5da78d47",
  "title": "Investment tips for beginners",
  "subTitle": "Grow your money",
  "description": "<h1>Invest Smartly</h1><p>Start investing early for better future.</p><h2>1.Mutual Funds</h2><p>Low risk option.</p>",
  "category": "Finance",
  "image": blog_pic_10,
  "isPublished": true
}

];

export const dashboard_data={
    "blogs":10,
    "comments":5,
    "drafts":0,
    "recentBlogs":blog_data.slice(0,5),
}

export const footer_data=[
    {
        title: "Quick Links",
        links:["Home", "Best Sellers", "Offers & Deals", "Contact Us" ,"FAQs"]
    },
    {
        title: "Need Help",
        links:["Delivery Information", "Return & Refund Policy", "Payment Methods", "Track your Order", "Contact Us"]
    },
    {
        title: "Follow us",
        links:  ["Instagram","Facebook","Twitter","Youtube"]
    }
];