/**
 * Available Feature Flags
 * @public
 */
export enum FeatureFlags {
  Events_OnChangeLiveUpdate = 'Events_OnChangeLiveUpdate'
}

const featureFlags: Record<FeatureFlags, boolean> = {
  [FeatureFlags.Events_OnChangeLiveUpdate]: false
};

/**
 * Enable or disable a feature flag
 * @public
 */
export function setFeatureFlag(flag: FeatureFlags | keyof typeof FeatureFlags, value: boolean): void {
  featureFlags[flag] = value;
}

/**
 * gets a feature flag
 * @internal
 */
export function getFeatureFlag(flag: FeatureFlags) {
  return featureFlags[flag];
}
