export const emailService = {
    deleteEmail,
    query
}

var gEmails = [
    {
        id: 1,
        subject: 'Hi there',
        body: 'Hi, my name is Dror, how are you?',
        isRead: true,
        sentAt: 1619867266000
    },
    {
        id: 2,
        subject: '',
        body: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation stands vivified, and has vowed to vanquish these venal and virulent vermin van-guarding vice and vouchsafing the violently vicious and voracious violation of volition. The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it is my very good honor to meet you and you may call me V.',
        isRead: false,
        sentAt: 1620040066000
    },
    {
        id: 3,
        subject: 'Wtf',
        body: 'Wtf',
        isRead: false,
        sentAt: 1620212866000
    },
]

function query(filterBy) {
    if (filterBy) {

    }
    return Promise.resolve(gEmails)
}

function deleteEmail(emailId) {
    const emailIdx = gEmails.findIndex((email) => {
        return emailId === email.id
    })
    gEmails.splice(emailIdx, 1);
    return Promise.resolve;
}