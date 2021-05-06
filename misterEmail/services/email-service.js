import { utilService } from '../../main/services/util-service.js'

export const emailService = {
    addEmail,
    removeEmail,
    query
}

var gEmails = [
    {
        id: utilService.makeId(),
        subject: 'Wtf',
        body: 'Wtf',
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

    }
    return Promise.resolve(gEmails)
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

