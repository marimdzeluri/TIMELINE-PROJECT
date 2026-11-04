// თაიმლაინის ინიციალიზაცია
window.timeline = new TL.Timeline('timeline-embed', 'timeline.json', {
    language: "ka", // ქართული ენის მხარდაჭერა თარიღებისთვის (თუ ხელმისაწვდომია ლოკალიზაცია) ან სტანდარტული ინგლისური
    hash_bookmark: true,
    initial_zoom: 2
});
