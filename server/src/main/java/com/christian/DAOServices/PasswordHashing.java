package com.christian.DAOServices;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.SecureRandom;

import org.springframework.stereotype.Service;

@Service
public class PasswordHashing {

	public Object[] generateHash(String password) {
		
		byte[] salt = createSalt(); 
				
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.reset();
			md.update(salt);
			byte[] hash = md.digest(password.getBytes(StandardCharsets.UTF_8));
			String decodedSalt = new String(salt, "ISO-8859-1");
			return new Object[] {decodedSalt, bytesToHex(hash)};
		} catch (Exception e) {
			return null;
		}
	}
	
	private byte[] createSalt() {
		byte[] bytes = new byte[20];
		SecureRandom random = new SecureRandom();
		random.nextBytes(bytes);
		return bytes;
	}

	public static String bytesToHex(byte[] hash) {
	    StringBuffer hexString = new StringBuffer();
	    for (int i = 0; i < hash.length; i++) {
	    String hex = Integer.toHexString(0xff & hash[i]);
	    if(hex.length() == 1) hexString.append('0');
	        hexString.append(hex);
	    }
	    return hexString.toString();
	}
	
	public static boolean checkPasswordHash(String dbSalt, String userInput, String dbPassword) {
		try {
			byte[] decodedSalt = dbSalt.getBytes("ISO-8859-1");
			MessageDigest md = MessageDigest.getInstance("SHA-256");
			md.reset();
			md.update(decodedSalt);
			byte[] hash = md.digest(userInput.getBytes(StandardCharsets.UTF_8));
			String convertInputPw = bytesToHex(hash);
			if (convertInputPw.equals(dbPassword)) {
				return true;
			} else {
				return false;
			}
		} catch (Exception e) {
			return false;
		}
	}
}
