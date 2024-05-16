import { View, Text, TouchableOpacity }  from 'react-native';

import { styles } from './styles';

export function Participant() {
    function handleParticipantRemove() {
        console.log("Você clicou no botão de remover");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                Gabriel Medeiros
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleParticipantRemove}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    );
}