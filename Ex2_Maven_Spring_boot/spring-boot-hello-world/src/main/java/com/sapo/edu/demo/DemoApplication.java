package com.sapo.edu.demo;

import org.apache.commons.lang3.StringUtils;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		String string = "nguyenvanthu";
		String str = "NGUYEN";
		Scanner scanner = new Scanner(System.in);

		System.out.println("What your name?");
		String name=null;
		if (scanner.hasNext()) {
			name = scanner.nextLine();
		}
		System.out.println("Hello "+ name+"\n");

		System.out.println("=========Ban hay chon cac Method can duoc kiem tra ========");
		showSelection();
		int index = 0;
		System.out.println("\nHay nhan lua chon cua ban");
		if (scanner.hasNext()){
			index = scanner.nextInt();
		}
		switch (index){
			case 1: containsAny(name);
				break;
			case 2: containsIgnoreCase(name);
				break;
			case 3: countMatches(name);
				break;
			case 4: appendIfMissingAndprependIfMissing(name);
				break;
			case 5: uppercase(name);
				break;
			case 6: lowercase(name);
				break;
			default:
				System.out.println("Erro!!!");
				break;
		}
	}
	public void showSelection(){
		System.out.print("1. ContainsAny");
		System.out.print("\t\t\t\t4. AppendIfMissing And PrependIfMissing\n");
		System.out.print("2. ContainsIgnoreCase");
		System.out.print("\t\t5. Uppercase\n");
		System.out.print("3. CountMatches");
		System.out.print("\t\t\t\t6. Lowercase\n");
	}
	public String inPut(){
		Scanner scanner = new Scanner(System.in);
		String str = null;
		if (scanner.hasNext()) {
			str = scanner.nextLine();
		}
		return str;
	}
	public void containsAny(String string){
		System.out.println("ContainsAny");
		System.out.println("Nhap ky tu can kiem tra?");
		String str = inPut();
		System.out.println(StringUtils.containsAny(string, str));
	}
	public void containsIgnoreCase(String string){
		System.out.println("ContainsIgnoreCase");
		System.out.println("Nhap ky tu can kiem tra?");
		String str = inPut();
		boolean contained = StringUtils.containsIgnoreCase(string, str);
		System.out.println(contained);
	}
	public void countMatches(String string){
		System.out.println("CountMatches");
		System.out.println("Nhap ky tu can kiem tra?");
		String str = inPut();
		int stringNum = StringUtils.countMatches(string, str);
		System.out.println(stringNum);
	}
	public void appendIfMissingAndprependIfMissing(String string){
		System.out.println("AppendIfMissing And PrependIfMissing");
		System.out.println("Nhap ky tu can chen?");
		String str = inPut();
		Scanner scanner = new Scanner(System.in);
		int index = 0;
		System.out.println("Hay nhan lua chon cua ban?");
		System.out.println("1. AppendIfMissing");
		System.out.println("2. PrependIfMissing");
		if (scanner.hasNext()){
			index = scanner.nextInt();
		}
		switch (index){
			case 1:
				System.out.println(StringUtils.appendIfMissing(string, str));;
				break;
			case 2:
				System.out.println(StringUtils.prependIfMissing(string, str));
				break;
			default:
				System.out.println("Erro!!!");
				break;
		}
	}
	public void uppercase(String string){
		String stringUpperCase = StringUtils.upperCase(string);
		System.out.println(stringUpperCase);

	}
	public void lowercase(String string){
		String stringLowerCase = StringUtils.lowerCase(string);
		System.out.println(stringLowerCase);
	}

}
