import React, { PureComponent } from "react";

interface IAppOwnProps {
  timerCount: number,
  timerTitle?: string,
  timerActiveTitle?: string[],
  timerEnd?: () => void,
  executeFunc?: (shouldStartCounting: (shouldStart: boolean) => void) => void,
  enable: boolean,
  onClick?: (shouldStartCounting: (shouldStart: boolean) => void) => void,
  style?: any,
  textStyle: any,
  disableColor?: string,
  width?: number,
  height?: number,
  onClickWithoutShouldStartCounting?: () => void
}

interface IAppOwnState {
  timerCount: number,
  timerTitle: string,
  counting: number,
  selfEnable: boolean
}

class CountDownButton extends PureComponent<IAppOwnProps, IAppOwnState> {
  private interval: NodeJS.Timeout | undefined;
private time=0
  constructor(props: IAppOwnProps) {
    super(props);
    this.state = {
      timerCount: this.props.timerCount || 60,
      timerTitle: this.props.timerTitle || "获取验证码",
      counting: 5,
      selfEnable: true
    };
  }


  componentDidMount() {
    const {timerCount} = this.props;
    timerCount&&this.setState({counting:timerCount})
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


  beginCountDown = () => {
    const { counting } = this.state
    this.interval=setInterval(()=>{
      if(counting!==0){
        this.setState({counting:this.props.timerCount-Math.round((new Date().getTime()-this.time)/1000)})
      }else{
        this.setState({
          selfEnable: true
        })
      }
    },1000)
  };
  onClick = () => {
    const { selfEnable } = this.state
    if (selfEnable) {
      this.setState({
        selfEnable: false
      })
      this.time=new Date().getTime()
      this.beginCountDown()
    }
  }

  render() {
    const { width, height } = this.props;
    const { counting, timerTitle, selfEnable } = this.state;
    return (
        <>
          <button
              disabled={!selfEnable ? true : false}
              onClick={this.onClick}
              style={{
                width: width ? width : 120,
                height: height ? height : 33,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
          >
            <div
                style={{ fontSize: 16 }}>{selfEnable ? timerTitle : counting}</div>
          </button>
        </>
    );
  }
}

export default CountDownButton;
