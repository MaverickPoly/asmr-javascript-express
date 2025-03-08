const timeController = (req, res) => {
    const currentDate = new Date()
    res.send(`Current time: ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`)
}



export default timeController