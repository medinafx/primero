export const selectSwitchButtons = (state, props, namespace) => {
  return state.getIn(["records", namespace, "filters", props.id], []);
};