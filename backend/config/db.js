const connectDb= async () => {
    try {
        await mongoose.connect()
    } catch (error) {
        
    }
}