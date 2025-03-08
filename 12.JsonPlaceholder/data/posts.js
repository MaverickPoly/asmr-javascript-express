const Posts = [
    {
        "id": 1,
        "userId": 1,
        "title": "The Future of AI in Everyday Life",
        "body": "Artificial intelligence is transforming the way we live and work, enhancing efficiency and convenience."
    },
    {
        "id": 2,
        "userId": 2,
        "title": "How to Stay Productive While Working Remotely",
        "body": "Remote work requires discipline and a structured schedule to maintain high productivity levels."
    },
    {
        "id": 3,
        "userId": 3,
        "title": "The Benefits of a Plant-Based Diet",
        "body": "Switching to a plant-based diet has numerous health benefits, including improved digestion and heart health."
    },
    {
        "id": 4,
        "userId": 4,
        "title": "Top 10 Travel Destinations for 2025",
        "body": "From the beaches of Bali to the mountains of Switzerland, here are the best places to visit in 2025."
    },
    {
        "id": 5,
        "userId": 5,
        "title": "Understanding Cryptocurrency and Blockchain",
        "body": "A beginner-friendly guide to how blockchain technology is revolutionizing the financial industry."
    },
    {
        "id": 6,
        "userId": 6,
        "title": "Best Practices for Cybersecurity in 2025",
        "body": "Protect yourself from cyber threats with these essential security tips."
    },
    {
        "id": 7,
        "userId": 7,
        "title": "How to Build a Strong Personal Brand",
        "body": "A strong personal brand helps you stand out in your industry and attract new opportunities."
    },
    {
        "id": 8,
        "userId": 8,
        "title": "The Rise of Electric Vehicles",
        "body": "Electric vehicles are becoming more popular, offering a sustainable alternative to traditional cars."
    },
    {
        "id": 9,
        "userId": 9,
        "title": "Tips for Learning a New Language",
        "body": "Consistent practice, immersion, and language apps can help you learn a new language quickly."
    },
    {
        "id": 10,
        "userId": 10,
        "title": "How to Start Investing in Stocks",
        "body": "A beginner’s guide to understanding the stock market and making smart investment choices."
    },
    {
        "id": 11,
        "userId": 11,
        "title": "The Importance of Mental Health Awareness",
        "body": "Prioritizing mental health is crucial for overall well-being and productivity."
    },
    {
        "id": 12,
        "userId": 12,
        "title": "The Role of Technology in Education",
        "body": "E-learning platforms and digital tools are reshaping the way students learn."
    },
    {
        "id": 13,
        "userId": 13,
        "title": "How to Achieve Financial Freedom",
        "body": "Smart saving and investing strategies can help you achieve financial independence."
    },
    {
        "id": 14,
        "userId": 14,
        "title": "The Benefits of Meditation and Mindfulness",
        "body": "Regular meditation can reduce stress, improve focus, and boost overall happiness."
    },
    {
        "id": 15,
        "userId": 15,
        "title": "The Future of Renewable Energy",
        "body": "Solar, wind, and hydro energy are becoming the dominant sources of power worldwide."
    },
    {
        "id": 16,
        "userId": 16,
        "title": "How to Build Healthy Habits",
        "body": "Creating a daily routine with positive habits can lead to a healthier lifestyle."
    },
    {
        "id": 17,
        "userId": 17,
        "title": "Why Reading Books is Essential",
        "body": "Books expand knowledge, improve vocabulary, and enhance critical thinking skills."
    },
    {
        "id": 18,
        "userId": 18,
        "title": "The Psychology of Motivation",
        "body": "Understanding what drives motivation can help improve productivity and goal-setting."
    },
    {
        "id": 19,
        "userId": 19,
        "title": "The Evolution of Social Media",
        "body": "Social media has transformed how we connect, communicate, and consume content."
    },
    {
        "id": 20,
        "userId": 20,
        "title": "The Impact of Climate Change on Our Planet",
        "body": "Rising temperatures and extreme weather events highlight the urgent need for environmental action."
    },
    {
        "id": 21,
        "userId": 1,
        "title": "How to Improve Your Sleep Quality",
        "body": "Good sleep is essential for mental and physical well-being. Here are some tips to improve sleep."
    },
    {
        "id": 22,
        "userId": 2,
        "title": "The Power of Daily Exercise",
        "body": "Regular physical activity can improve your mood, boost energy levels, and prevent chronic diseases."
    },
    {
        "id": 23,
        "userId": 3,
        "title": "How to Start a Successful Blog",
        "body": "A step-by-step guide to starting a blog and growing your audience."
    },
    {
        "id": 24,
        "userId": 4,
        "title": "The Best Budgeting Tips for 2025",
        "body": "Learn how to manage your finances and save money effectively."
    },
    {
        "id": 25,
        "userId": 5,
        "title": "The Importance of Learning to Code",
        "body": "Programming skills are becoming more essential in today’s tech-driven world."
    },
    {
        "id": 26,
        "userId": 6,
        "title": "The Benefits of Drinking More Water",
        "body": "Staying hydrated helps with digestion, energy levels, and overall health."
    },
    {
        "id": 27,
        "userId": 7,
        "title": "How to Overcome Procrastination",
        "body": "Practical strategies to boost motivation and avoid distractions."
    },
    {
        "id": 28,
        "userId": 8,
        "title": "The Rise of Remote Work Opportunities",
        "body": "More companies are embracing remote work, offering flexibility and work-life balance."
    },
    {
        "id": 29,
        "userId": 9,
        "title": "How to Build a Strong Morning Routine",
        "body": "Starting your day with a structured routine can improve productivity and focus."
    },
    {
        "id": 30,
        "userId": 10,
        "title": "The Science Behind Happiness",
        "body": "Psychological studies reveal what truly makes people happy."
    },
    {
        "id": 31,
        "userId": 11,
        "title": "How to Stay Motivated During Tough Times",
        "body": "Practical tips to maintain motivation and resilience during challenges."
    },
    {
        "id": 32,
        "userId": 12,
        "title": "The Impact of Social Media on Mental Health",
        "body": "Social media can influence self-esteem and well-being. Here’s how to use it mindfully."
    },
    {
        "id": 33,
        "userId": 13,
        "title": "The Basics of Personal Finance",
        "body": "Understanding saving, investing, and managing debt effectively."
    },
    {
        "id": 34,
        "userId": 14,
        "title": "How to Start a Side Hustle",
        "body": "Earning extra income through a side hustle can improve financial security."
    },
    {
        "id": 35,
        "userId": 15,
        "title": "The Evolution of Artificial Intelligence",
        "body": "AI is transforming industries and creating new opportunities for innovation."
    },
    {
        "id": 36,
        "userId": 16,
        "title": "How to Build Self-Confidence",
        "body": "Confidence can be developed with practice and the right mindset."
    },
    {
        "id": 37,
        "userId": 17,
        "title": "The Benefits of Journaling",
        "body": "Writing down thoughts can help with self-reflection and emotional well-being."
    },
    {
        "id": 38,
        "userId": 18,
        "title": "How to Reduce Stress Naturally",
        "body": "Simple techniques such as meditation, deep breathing, and exercise can lower stress levels."
    },
    {
        "id": 39,
        "userId": 19,
        "title": "The Best Books to Read This Year",
        "body": "A curated list of must-read books covering various genres."
    },
    {
        "id": 40,
        "userId": 20,
        "title": "The Role of AI in Healthcare",
        "body": "How artificial intelligence is improving diagnostics, treatment, and patient care."
    },
    {
        "id": 41,
        "userId": 1,
        "title": "The Benefits of a Minimalist Lifestyle",
        "body": "Living with less can lead to reduced stress, increased focus, and more financial freedom."
    },
    {
        "id": 42,
        "userId": 2,
        "title": "How to Build a Successful Startup",
        "body": "Key steps to launching and scaling a startup in today’s competitive market."
    },
    {
        "id": 43,
        "userId": 3,
        "title": "The Psychology Behind Decision-Making",
        "body": "Understanding cognitive biases can help you make better choices in life and business."
    },
    {
        "id": 44,
        "userId": 4,
        "title": "Top 5 Productivity Apps for 2025",
        "body": "These apps can help you manage tasks, set goals, and stay organized efficiently."
    },
    {
        "id": 45,
        "userId": 5,
        "title": "The Power of Gratitude in Daily Life",
        "body": "Practicing gratitude can boost happiness and improve overall well-being."
    },
    {
        "id": 46,
        "userId": 6,
        "title": "How to Create a Successful YouTube Channel",
        "body": "Tips and strategies to grow your audience and monetize your content."
    },
    {
        "id": 47,
        "userId": 7,
        "title": "The Role of IoT in Smart Homes",
        "body": "Internet of Things (IoT) is making homes more efficient, secure, and connected."
    },
    {
        "id": 48,
        "userId": 8,
        "title": "The Impact of Music on Mental Health",
        "body": "Listening to music can reduce stress, improve mood, and enhance focus."
    },
    {
        "id": 49,
        "userId": 9,
        "title": "How to Write a Winning Resume",
        "body": "A well-crafted resume increases your chances of landing your dream job."
    },
    {
        "id": 50,
        "userId": 10,
        "title": "The Science of Goal-Setting",
        "body": "Setting specific, measurable goals can significantly increase achievement rates."
    },
    {
        "id": 51,
        "userId": 11,
        "title": "Why Time Management Matters",
        "body": "Effective time management can improve productivity and reduce stress."
    },
    {
        "id": 52,
        "userId": 12,
        "title": "The Growing Popularity of Online Learning",
        "body": "E-learning platforms are transforming education and making knowledge more accessible."
    },
    {
        "id": 53,
        "userId": 13,
        "title": "The Power of Positive Thinking",
        "body": "A positive mindset can improve resilience, success, and overall well-being."
    },
    {
        "id": 54,
        "userId": 14,
        "title": "How to Improve Your Public Speaking Skills",
        "body": "Overcoming stage fright and developing confidence in speaking to an audience."
    },
    {
        "id": 55,
        "userId": 15,
        "title": "The Basics of Digital Marketing",
        "body": "Understanding SEO, content marketing, and social media for business growth."
    },
    {
        "id": 56,
        "userId": 16,
        "title": "How to Develop Leadership Skills",
        "body": "Leadership skills are essential for career growth and personal development."
    },
    {
        "id": 57,
        "userId": 17,
        "title": "The History of the Internet",
        "body": "From ARPANET to Web 3.0, a look at how the internet has evolved."
    },
    {
        "id": 58,
        "userId": 18,
        "title": "How to Stay Healthy While Working a Desk Job",
        "body": "Simple exercises and posture tips to prevent back pain and fatigue."
    },
    {
        "id": 59,
        "userId": 19,
        "title": "The Future of Space Exploration",
        "body": "Mars colonization, space tourism, and other advancements in space travel."
    },
    {
        "id": 60,
        "userId": 20,
        "title": "How to Start a Podcast in 2025",
        "body": "A complete guide to recording, editing, and monetizing your podcast."
    }

]

export default Posts