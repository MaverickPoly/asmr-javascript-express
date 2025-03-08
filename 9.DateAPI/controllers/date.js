const dateController = (req, res) => {
    const currentDate = new Date()
    res.send(`Current date: ${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`)
}


export default dateController