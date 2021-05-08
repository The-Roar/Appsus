export class LongTxt extends React.Component {
  state = {
    isLongShown: false,
  };
  onToggleShow = (ev) => {
    ev.preventDefault();
    this.setState(({ isLongShown }) => ({ isLongShown: !isLongShown }));
  };
  render() {
    const { isLongShown } = this.state;
    const isOver100 = this.props.text.length > 100 ? true : false;
    let shortTxt = this.props.text.slice(0, 100);
    if (isOver100) shortTxt += '...';
    return (
      <section>
        <React.Fragment>
          <p>{isLongShown ? this.props.text : shortTxt}</p>
          {isOver100 && (
            <span className='txt-show-btn' onClick={this.onToggleShow}>
              {isLongShown ? 'Show Less' : 'Show More'}
            </span>
          )}
        </React.Fragment>
      </section>
    );
  }
}
