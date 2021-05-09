export class UserMsg extends React.Component {
  state = {
    msgs: {
      success: {
        icon: 'far fa-check-circle',
        title: 'Success!',
        btns: [
          {
            txt: 'OK',
            onClick: this.props.hideModal,
          },
        ],
      },
      error: {
        icon: 'far fa-times-circle',
        title: 'Error',
        btns: [
          {
            txt: 'OK',
            onClick: this.props.hideModal,
          },
        ],
      },
      unsavedChanges: {
        icon: 'fas fa-exclamation-circle',
        title: "Oops, you didn't save",
        btns: [{ txt: 'OK', onClick: this.props.hideModal }],
      },
    },
  };

  render() {
    const { msgType, msg } = this.props;
    if (!msgType) return <React.Fragment />;
    const { icon, title, btns } = this.state.msgs[msgType];
    return (
      <div className={`modal-container ${msgType}`}>
        <div className='modal-content'>
          <i className={icon}></i>
          <h1>{title}</h1>
          <p>{msg}</p>
          <section className='modal-btns'>
            {btns.map((btn, idx) => (
              <button key={idx} onClick={btn.onClick}>
                {btn.txt}
              </button>
            ))}
          </section>
        </div>
      </div>
    );
  }
}
