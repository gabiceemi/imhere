import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { Participant } from '@/src/components/Participant';

export default function Home() {

    function handleParticipantAdd() {
        console.log("Você clicou no botão de adicionar");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do Evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 17 de Maio de 2024.
            </Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant />
        </View>
    );
}