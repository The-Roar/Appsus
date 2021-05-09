import { utilService } from '../../main/services/util-service.js'

export const emailService = {
    addEmail,
    query,
    removeEmail,
    setRead
}

var gEmails = [
    {
        id: utilService.makeId(),
        subject: 'Major-General\'s Song',
        body: 'I am the very model of a modern Major-General\nI\'ve information vegetable, animal, and mineral\nI know the kings of England, and I quote the fights historical\nFrom Marathon to Waterloo, in order categorical;\nI\'m very well acquainted too with matters mathematical\nI understand equations, both the simple and quadratical\nAbout binomial theorem I\'m teeming with a lot o\' news---\nWith many cheerful facts about the square of the hypotenuse\nWith many cheerful facts about the square of the hypotenuse\nWith many cheerful facts about the square of the hypotenuse\nWith many cheerful facts about the square of the hypote-pote-nuse\nI\'m very good at integral and differential calculus\nI know the scientific names of beings animalculous;\nIn short, in matters vegetable, animal, and mineral\nI am the very model of a modern Major-General\nIn short, in matters vegetable, animal, and mineral\nHe is the very model of a modern Major-General!\nI know our mythic history, King Arthur\'s and Sir Caradoc\'s\nI answer hard acrostics, I\'ve a pretty taste for paradox\nI quote in elegiacs all the crimes of Heliogabalus\nIn conics I can floor peculiarities parablous\nI can tell undoubted Raphaels from Gerard Dows and Zoffanies\nI know the croaking chorus from the Frogs of Aristophanes\nThen I can hum a fugue of which I\'ve heard the music\'s din afore\nAnd whistle all the airs from that infernal nonsense Pinafore\nAnd whistle all the airs from that infernal nonsense Pinafore\nAnd whistle all the airs from that infernal nonsense Pinafore\nAnd whistle all the airs from that infernal nonsense Pinafore!\nThen I can write a washing bill in Balylonic cuneiform\nAnd tell you every detail of Caractacus\'s uniform;\nIn short, in matters vegetable, animal, and mineral\nI am the very model of a modern Major-General\nIn short, in matters vegetable, animal, and mineral\nHe is the very model of a modern Major-General!\nIn fact, when I know what is meant by "mamelon" and "ravelin"\nWhen I can tell at sight a mauser rifle from a javelin\nWhen such affairs as sorties and surprises I\'m more wary at\nAnd when I know precisely what is meant by "commissariat"\nWhen I have learnt what progress has been made in modern gunnery\nWhen I know more of tactics than a novice in a nunnery:\nIn short, when I\'ve a smattering of elemental strategy\nYou\'ll say a better Major-General has never sat a gee\nYou\'ll say a better Major-General has never sat a gee\nYou\'ll say a better Major-General has never sat a gee\nYou\'ll say a better Major-General has never sat-a-sat-a-gee\nFor my military knowledge, though I\'m plucky and adventury\nHas only been brought down to the beginning of the century;\nBut still in matters vegetable, animal, and mineral\nI am the very model of a modern Major-General\nBut still in matters vegetable, animal, and mineral\nHe is the very model of a modern Major-General!',
        isRead: false,
        sentAt: 1620212866,
        date: utilService.convertTimeStamp(1620212866000)
    },
    {
        id: utilService.makeId(),
        subject: 'Wtf',
        body: '',
        isRead: false,
        sentAt: 1620212866,
        date: utilService.convertTimeStamp(1620212866000)
    },
    {
        id: utilService.makeId(),
        subject: '',
        body: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation stands vivified, and has vowed to vanquish these venal and virulent vermin van-guarding vice and vouchsafing the violently vicious and voracious violation of volition. The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it is my very good honor to meet you and you may call me V.',
        isRead: false,
        sentAt: 1620040066,
        date: utilService.convertTimeStamp(1620040066000)
    },
    {
        id: utilService.makeId(),
        subject: 'Hi there',
        body: 'Hi, my name is Dror, how are you?',
        isRead: true,
        sentAt: 1619867266,
        date: utilService.convertTimeStamp(1619867266000)
    },
]

function query(filterBy) {
    if (filterBy) {
        const { read } = filterBy;
        const txt = filterBy.txt.toLowerCase();
        let filteredEmails = gEmails;
        if (txt.length) {
            filteredEmails = filteredEmails.filter(email => {
                let emailTxt = (email.subject + email.body).toLowerCase();
                let isIncludesTxt = emailTxt.includes(txt);
                return isIncludesTxt;
            });
        }
        switch (read) {
            case "unread":
                filteredEmails = filteredEmails.filter(email => email.isRead)
                break;
            case "read":
                filteredEmails = filteredEmails.filter(email => !email.isRead)
                break;
        }
        return Promise.resolve(filteredEmails);
    }
    return Promise.resolve(gEmails);
}

function addEmail(subject, body, sentAt) {
    const newEmail = {
        id: utilService.makeId(),
        subject,
        body,
        isRead: false,
        sentAt,
        date: utilService.convertTimeStamp(sentAt)
    }
    gEmails.unshift(newEmail);
    return Promise.resolve()
}

function removeEmail(emailId) {
    const emailIdx = gEmails.findIndex((email) => {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1);
    return Promise.resolve();
}

function setRead(emailId) {
    const emailIdx = gEmails.findIndex((email) => {
        return emailId === email.id
    })
    gEmails[emailIdx].isRead = true;
    return Promise.resolve();
}