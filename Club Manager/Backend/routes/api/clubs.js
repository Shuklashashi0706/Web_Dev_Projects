const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const Club = require('../../models/Club')

// To create clubs
router.post('/', auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('interests', 'Interests are required').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const admin = await User.findById(req.user.id).select('-password')

        const user = req.user.id
        let adminClub = await Club.findOne({ user })

        if (admin.role == 'student') {
            return res.status(400).json({ errors: 'You have to be a admin' })
        }

        if (adminClub) {
            return res.status(400).json({ errors: 'User already has a club' })
        }

        const interests = req.body.interests.split(',').map(interest => interest.trim())

        const newClub = new Club({
            user: req.user.id,
            description: req.body.description,
            president: admin.name,
            name: req.body.name,
            collegename: admin.collegename,
            interests: interests,
            logoimg: "",
            coverimg: "",
            contactemail: "",
            contactmobile: null,
            vicepresident: "",
            secretary: "",
            treasurer: ""
        })
        const club = await newClub.save()
        res.json(club)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

})

// To edit club
router.post('/edit', auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('interests', 'Interests is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const admin = await User.findById(req.user.id).select('-password')
        const user = req.user.id
        const club = await Club.findOne({ user })

        const { logoimg, coverimg, name, contactemail, contactmobile, description, vicepresident, secretary, treasurer } = req.body

        const members = req.body.members.split(',').map(member => member.trim())
        const achievements = req.body.achievements.split(',').map(achievement => achievement.trim())
        const interests = req.body.interests.split(',').map(interest => interest.trim())

        club.logoimg = logoimg
        club.coverimg = coverimg
        club.name = name
        club.description = description
        club.contactemail = contactemail
        club.contactmobile = contactmobile
        club.collegename = admin.collegename,
        club.interests = interests
        club.president = admin.name
        club.vicepresident = vicepresident
        club.secretary = secretary
        club.treasurer = treasurer
        club.members = members
        club.achievements = achievements

        await club.save()
        res.json(club)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// To get all clubs
router.get('/', async (req, res) => {
    try {
        const clubs = await Club.find().sort({ date: -1 })
        res.json(clubs)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// To get a single club
router.get('/:id', auth, async (req, res) => {
    try {

        const user = req.params.id
        let club = await Club.findOne({ user })
        if (!club) {
            return res.status(404).json({ errors: "Club not found" })
        }
        res.json(club)
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ errors: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

// To delete a club
router.delete('/:id', auth, async (req, res) => {
    try {
        const club = await Club.findById(req.params.id)
        if (!club) {
            return res.status(404).json({ errors: "Club not found" })
        }

        // Check user
        if (club.user.toString() !== req.user.id) {
            return res.status(401).json({ errors: "User not authorized" })
        }

        await club.remove()
        res.json({ msg: "Club removed" })
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ errors: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

// To like a club
router.put('/like/:id', auth, async (req, res) => {
    try {
        const club = await Club.findById(req.params.id)
        if (!club) {
            return res.status(404).json({ errors: "Club not found" })
        }

        // Check if the club has already been liked
        if (club.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ errors: 'Club already liked' })
        }

        club.likes.unshift({ user: req.user.id })

        await club.save()
        res.json(club.likes)
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ errors: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

// To unlike a club
router.put('/unlike/:id', auth, async (req, res) => {
    try {
        const club = await Club.findById(req.params.id)
        if (!club) {
            return res.status(404).json({ errors: "Club not found" })
        }

        // Check if the club has not yet been liked
        if (club.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ errors: 'Club has not yet been liked' })
        }

        const removeIndex = club.likes.map(like => like.user.toString()).indexOf(req.user.id)
        club.likes.splice(removeIndex, 1)

        await club.save()
        res.json(club.likes)
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ errors: "Club not found" })
        }
        res.status(500).send('Server Error')
    }
})

module.exports = router