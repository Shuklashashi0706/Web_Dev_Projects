const express = require('express')
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const router = express.Router()

// To edit profile
router.post('/', auth, [
    check('name', 'Name is required').not().isEmpty(),
    check('mobile', 'Please include valid mobile number').not().isEmpty(),
    check('gender', 'Gender is required').not().isEmpty(),
    check('usn', 'Please include valid USN').not().isEmpty(),
    check('collegename', 'College name is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { img, name, mobile, usn, collegename, gender, course, sem, dob } = req.body

    try {
        const user = await User.findById(req.user.id).select('-password')
        // const profile = {}
        // if (img) profile.img = img
        // if (name) profile.name = name
        // if (usn) profile.usn = usn
        // if (mobile) profile.mobile = mobile
        // if (collegename) profile.collegename = collegename
        // if (gender) profile.gender = gender
        // if (course) profile.course = course
        // if (sem) profile.sem = sem
        // if (dob) profile.dob = dob
        user.img = img
        user.name = name
        user.usn = usn
        user.mobile = mobile
        user.collegename = collegename
        user.gender = gender
        user.course = course
        user.sem = sem
        user.dob = dob

        // user = await User.findOneAndUpdate({ _id: req.user.id }, { $set: profile }, { new: true })

        await user.save()
        res.json(user)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})


module.exports = router