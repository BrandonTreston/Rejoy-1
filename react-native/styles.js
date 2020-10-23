import {
  StyleSheet
} from 'react-native';

const defButtonWidth = 206
const defButtonHeight = 36
const mainBlue = '#1BB0BD'
const mainYellow = '#FFD63F'
const mainGray = '#F5F5F5'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  home: {
    height: 100 + "%",
    justifyContent: "center"
  },
  logo: {
    alignItems: "center",
    marginTop: 2 + '%',
    marginBottom: 2 + '%'
  },

  people: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    marginTop: 10 + '%',
    marginBottom: 10 + '%',
    marginRight: 25 + '%',
    marginLeft: 25 + '%'
  },

  TitleText: {
    textAlign: "center",
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,
    /* identical to box height */
    letterSpacing: 0.05,
    color: mainGray
  },

  SubTitleText: {
    textAlign: "center",
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 14,
    /* identical to box height */
    letterSpacing: 0.05,
    color: mainGray
  },

  SeniorButton: {
    backgroundColor: mainYellow,
    width: defButtonWidth,
    height: defButtonHeight,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.23,
    shadowRadius: 2,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 25 + '%',
    marginLeft: 25 + '%'
  },
  SeiorText: {
    textAlign: "center",
    color: '#505050',
    // fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'bold',
  },

  StudentText: {
    textAlign: "center",
    color: mainYellow,
    // fontFamily: 'Helvetica',
    fontSize: 12,
    fontWeight: 'bold',
  },

  StudentButton: {
    backgroundColor: '#00000000',
    borderColor: mainYellow,
    borderStyle: "solid",
    borderWidth: 2,
    width: defButtonWidth,
    height: defButtonHeight,
    borderRadius: 10,
    padding: 7,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 25 + '%',
    marginLeft: 25 + '%'
  },

  Heading1: {
    /* Let’s Get Started */
    width: 236,
    height: 37,
    // fontFamily: 'Gilroy',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 37,
    color: mainBlue,
    textAlign: "center"
  },

  Heading2: {
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 139,
    color: '#666666',
    textAlign: "center",
  },

  GoogleSignup: {
    backgroundColor: mainGray,
    width: 300,
    height: 42,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: "row",
    justifyContent: "space-evenly",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    elevation: 5
  },
  FacebookSignup: {
    backgroundColor: '#475993',
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 300,
    height: 42,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  DefaultButton: {
    backgroundColor: mainBlue,
    width: 300,
    height: 42,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  loginLink: {
    color: mainBlue,
    fontWeight: 'bold'
  },

  loginLink2: {
    marginRight: 15 + "%",
    marginLeft: 15 + "%",
    marginTop: 10 + '%',
    marginBottom: 50 + '%',
    fontSize: 12,
    textDecorationLine: 'underline'
  },
  LoginSignupContainer: {
    backgroundColor: "#fff",
    width: 100 + "%",
    height: 100 + "%",
    justifyContent: "center",
    alignItems: "center",
  },
  NYITSignIn: {
    backgroundColor: mainYellow,
    width: 300,
    height: 42,
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  TextInput: {
    backgroundColor: '#e0e0e0',
    opacity: 0.7,
    fontSize: 14,
    borderRadius: 6,
    width: 300,
    height: 36,
    paddingLeft: 20,
    marginTop: 10
  },

  link: {
    color: mainBlue,
  },

});

export default styles;