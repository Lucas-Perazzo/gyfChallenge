import React from "react";
import HomeScreen from '../app/ui/screens/HomeScreen';
import { fireEvent, render } from "@testing-library/react-native";

describe('Home Screen', () => {
    it('Debe ir a la Screen de Posteos', () => {
        const navigation = {navigate: () => {}};
        spyOn(navigation, 'navigate');
    
        const page = render(<HomeScreen navigation={navigation} />);
    
        const goPosts = page.getByTestId('goPosts');
    
        fireEvent.press(goPosts);
    
        expect(navigation.navigate).toHaveBeenCalledWith('PostScreen');
    });
});
