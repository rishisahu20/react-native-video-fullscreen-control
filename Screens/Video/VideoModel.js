/**
 * @format
 */
import React, {useState, useEffect} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';

export const VideoModel = props => {
  const {theme} = props;
  const [screenState, setScreenState] = useState({
    fullScreen: false,
    Width_Layout: '',
    Height_Layout: '',
    potraitMode: true,
  });

  useEffect(() => {
    Orientation.unlockAllOrientations();
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);

  useEffect(() => {
    detectOrientation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenState.Width_Layout]);

  useEffect(() => {
    let {fullScreen, potraitMode} = screenState;
    !fullScreen && !potraitMode ? Orientation.lockToPortrait() : '';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenState.fullScreen]);

  const changeState = values => {
    setScreenState(prevState => {
      return {
        ...prevState,
        ...values,
      };
    });
  };

  const detectOrientation = () => {
    if (screenState.Width_Layout > screenState.Height_Layout) {
      // Write code here, which you want to execute on Landscape Mode.
      changeState({fullScreen: true, potraitMode: false});
    } else {
      // Write code here, which you want to execute on Portrait Mode.
      changeState({fullScreen: false, potraitMode: true});
    }
  };

  const modalScreenView = () => {
    return (
      <TouchableOpacity
        style={styles.ModalOutsideContainer}
        onPress={() =>
          props.toggleModal({
            isVisible: false,
            data: null,
          })
        }>
        <View style={styles.ModalContainer} theme={theme}>
          <TouchableWithoutFeedback>
            <View style={styles.ModalBox} theme={theme}>
              <View style={styles.VideoPlayerContainer} theme={theme}>
                {videoPlayerView()}
              </View>
              <Text style={styles.VideoTitle} theme={theme}>
                {props.videoDetail.title}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableOpacity>
    );
  };

  const videoPlayerView = () => {
    let {fullScreen} = screenState;
    return (
      <VideoPlayer
        source={{
          uri: props.videoDetail.url,
        }}
        onBack={() =>
          props.toggleModal({
            isVisible: false,
            data: null,
          })
        }
        resizeMode="contain"
        toggleResizeModeOnFullscreen={false}
        onEnterFullscreen={() => {
          changeState({fullScreen: !fullScreen});
        }}
      />
    );
  };

  return (
   <Modal
      animationType={'fade'}
      supportedOrientations={['portrait', 'landscape']}
      transparent={true}
      visible={props.isVisible}>
      <View
        style={styles.ModalWrapper}
        onLayout={event => {
          const {layout} = event.nativeEvent;
          changeState({
            Width_Layout: layout.width,
            Height_Layout: layout.height,
          });
        }}>
        {screenState.fullScreen ? videoPlayerView() : modalScreenView()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModalOutsideContainer: {
    flex: 1,
  },
  ModalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  ModalWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  ModalBox: {
    width: '85%',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingHorizontal: 6,
    borderRadius: 4,
    opacity: 1,
  },
  VideoPlayerContainer: {
    width: '100%',
    height: 150,
  },
  VideoTitle: {
    paddingVertical: 8,
    fontSize: 18,
    textAlign: 'center',
  },
});
