import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    gap: 5
  },
  userNameText: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  userNameEditContainer: {
    gap: 4,
    flexDirection: 'row'
  },
  userName: (username = false, editing = false) => ({
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
    borderBottomWidth: (!username || !editing) ? 1 : 0,
    borderStyle: 'dashed',
    padding: 0
  }),
  editBtn: (editing = false) => ({
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    aspectRatio: 1,
    alignSelf: 'flex-end',
    marginBottom: editing ? 0 : SIZES.xSmall * .2,
    padding: SIZES.xLarge * .1
  }),
  editBtnImage: {
    width: '100%',
    height: '100%',
    tintColor: COLORS.gray
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  }
});

export default styles;
