import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import styles from './styles';

const TooltipModal = ({ tooltipText }: { tooltipText: string }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Pressable style={styles.tooltipContainer} onPress={() => setModalVisible(true)}>
                <Text style={styles.tooltipIcon}>?</Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </Pressable>
                        <Text style={styles.modalText}>{tooltipText}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default TooltipModal;
