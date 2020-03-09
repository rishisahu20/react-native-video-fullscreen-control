import React, {useState} from 'react';
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  Image,
} from 'react-native';

import {VideoModel} from './VideoModel';
import {videos} from './config';

export const VideoScreen = props => {
  const {theme} = props;
  const [showModal, setShowModal] = useState({isVisible: false, data: null});

  const toggleModal = state => {
    setShowModal({
      isVisible: state.isVisible,
      data: state.data,
    });
  };

  return (
    <View style={styles.container}>
      {showModal.isVisible ? (
        <VideoModel
          isVisible={showModal.isVisible}
          toggleModal={toggleModal}
          videoDetail={showModal.data}
          {...props}
        />
      ) : null}
      <View style={styles.videoContainer}>
        {videos && (
          <FlatList
            data={videos}
            renderItem={({item}) => (
              <View style={styles.VideoThumbWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal({
                      isVisible: true,
                      data: item,
                    });
                  }}>
                  <View style={styles.PlayIconContainer}>
                    <View style={styles.PlayIconWrapper}>
                      {/* <PlayIcon width={28} height={28} /> */}
                    </View>
                  </View>
                  <Image
                    style={styles.BackGroundImage}
                    theme={theme}
                    source={item.thumbnail}
                    resizeMode={'contain'}
                  />
                </TouchableOpacity>
                <Text theme={theme}>{item.title}</Text>
              </View>
            )}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  videoContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  ModalOutsideContainer: {
    flex: 1,
  },
  VideoName: {
    paddingVertical: 1,
    paddingHorizontal: 2,
    fontSize: 16,
  },
  VideoThumbWrapper: {
    position: 'relative',
    width: '48%',
    marginRight: 8,
    marginBottom: 4,
  },
  PlayIconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  PlayIconWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackGroundImage: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  ModalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginTop: '25%',
  },
  ModalWrapper: {
    flex: 1,
  },
  ModalBox: {
    width: '85%',
    backgroundColor: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 2,
    opacity: 1,
  },
  VideoPlayerContainer: {
    width: '100%',
    height: 150,
  },
  VideoTitle: {
    paddingTop: 8,
    fontSize: 18,
  },
});
