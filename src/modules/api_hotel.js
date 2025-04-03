class HotelAPI {
    static async fetchReviews() {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
            return await res.json();
        } catch (error) {
            console.error("Error fetching reviews:", error);
            return [];
        }
    }
}

export default HotelAPI;